// ---- Bank account logic (closure pattern) ----
function BankAccount(InitialBalance) {
  let Balance = InitialBalance;

  return {
    Deposit: (amt1) => { Balance += amt1; return Balance; },
    Withdraw: (amt2) => {
      if (amt2 > Balance) return null; // insufficient funds guard
      Balance -= amt2;
      return Balance;
    },
    GetBalance: () => Balance,
  };
}

// ---- Single user setup ----
const User1 = BankAccount(1000); // starting balance

// ---- DOM references ----
const balanceDisplay = document.getElementById('balanceDisplay');
const amountInput   = document.getElementById('amountInput');
const depositBtn     = document.getElementById('depositBtn');
const withdrawBtn    = document.getElementById('withdrawBtn');
const messageBox     = document.getElementById('messageBox');
const historyList    = document.getElementById('historyList');

function formatMoney(n) {
  return '₹' + n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function refreshBalance() {
  balanceDisplay.textContent = formatMoney(User1.GetBalance());
}

function showMessage(text, type) {
  messageBox.textContent = text;
  messageBox.className = 'message ' + (type || '');
}

function addHistory(type, amount) {
  const row = document.createElement('div');
  row.className = 'history-item ' + type;
  const label = type === 'deposit' ? '+ Deposit' : '- Withdraw';
  row.innerHTML = `<span>${label}</span><span>${formatMoney(amount)}</span>`;
  historyList.prepend(row);
}

function getAmount() {
  const val = parseFloat(amountInput.value);
  return val;
}

depositBtn.addEventListener('click', () => {
  const amt = getAmount();
  if (isNaN(amt) || amt <= 0) {
    showMessage('Please enter a valid amount to deposit.', 'error');
    return;
  }
  User1.Deposit(amt);
  refreshBalance();
  addHistory('deposit', amt);
  showMessage(`Deposited ${formatMoney(amt)} successfully.`, 'success');
  amountInput.value = '';
});

withdrawBtn.addEventListener('click', () => {
  const amt = getAmount();
  if (isNaN(amt) || amt <= 0) {
    showMessage('Please enter a valid amount to withdraw.', 'error');
    return;
  }
  const result = User1.Withdraw(amt);
  if (result === null) {
    showMessage('Insufficient balance for this withdrawal.', 'error');
    return;
  }
  refreshBalance();
  addHistory('withdraw', amt);
  showMessage(`Withdrew ${formatMoney(amt)} successfully.`, 'success');
  amountInput.value = '';
});

// Initial render
refreshBalance();