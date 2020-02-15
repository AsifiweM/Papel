import { Router } from 'express';
const app = Router();

import { transactions_all, transactions_id } from '../controllers/transactions';
import { all_account_transactions, all_accounts } from '../controllers/accounts';
import { all_account_email } from '../controllers/users';

app.get('/transactions', transactions_all);
app.get('/transactions/:id', transactions_id);
app.get('/accounts/:accountnumber/transactions', all_account_transactions);
app.get('/user/:email/accounts', all_account_email);
app.get('/accounts', all_accounts);

export default app;

// all_accounts from accounts.js not finished