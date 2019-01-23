import {observable} from 'mobx';
import ChildrenStore from '../stores/ChildrenStore'

export default class BalanceModel {
    childUsername: string
    @observable charityPotBalance: number
    @observable goalBalance: number
    @observable savingsBalance: number
    @observable totalBalance: number
    @observable walletBalance: number

    store: ChildrenStore

    constructor(store, {childUsername, goalBalance, savingsBalance, totalBalance, walletBalance}) {
        this.store = store
        this.childUsername = childUsername;
        this.goalBalance = goalBalance;
        this.savingsBalance = savingsBalance;
        this.totalBalance = totalBalance;
        this.walletBalance = walletBalance;
    }

    destroy() {
        this.store.balances.remove(this);
    }

    toJS() {
        return {
            store: this.store,
            childUsername: this.childUsername,
            goalBalance: this.goalBalance,
            savingsBalance: this.savingsBalance,
            totalBalance: this.totalBalance,
            walletBalance: this.walletBalance
        };
    }

    static fromJS(store, object) {
        return new BalanceModel(store, object);
    }
}
