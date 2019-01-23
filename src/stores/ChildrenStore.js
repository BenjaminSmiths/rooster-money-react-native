import { observable, computed, reaction, action } from 'mobx';
import { API_URL, ACCESS_KEY, ACCESS_PASSWORD } from 'react-native-dotenv'

import parentStore, { ParentStore } from './ParentStore'

import BalanceModel from '../models/BalanceModel'

export default class ChildrenStore {
    @observable balances = [];
    @observable goals = [];

    parentStore: ParentStore

    getBalance() {
        reaction(
            () => this.parentStore.isAuthenticated,
            () => {
                return fetch(`${API_URL}/v1/balance`, {
                    method: 'get',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'x-access-token': this.parentStore.getToken
                    })
                })
                    .then(response => response.json())
                    .then(balances => {
                        this.balances = balances.map(balance => new BalanceModel(this, balance))
                    })
            }
        );
    }

    static create(parentStore) {
        const childrenStore = new ChildrenStore();
        childrenStore.parentStore = parentStore
        return childrenStore;
    }
}