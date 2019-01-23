import { computed, observable, action, runInAction } from "mobx"
import { AsyncStorage } from "react-native"
import { API_URL, ACCESS_KEY, ACCESS_PASSWORD } from 'react-native-dotenv'

export class ParentStore {

    country = 'en-GB'
    currency = 'EUR'
    parentCalled = 'Dad'

    @observable authorization = null

    @computed get isAuthenticated() {
        return this.authorization ? true : false
    }

    @action
    async login() {
        try {
            const token = await AsyncStorage.getItem('parentToken');
            if (!token) {
                runInAction(() => {
                    this.setToken(token)
                })
            }
            throw('no saved token')
        } catch (error) {
            return fetch(`${API_URL}/v1/auth`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    accessKey: ACCESS_KEY,
                    accessPassword: ACCESS_PASSWORD
                })
            })
                .then(response => response.json())
                .then((body) => {
                    if (body.error) {
                        return Promise.reject(body.error)
                    }
                    if (body.token !== null) {
                        const token = body.token
                        runInAction(() => {
                            this.setToken(token)
                        })
                    }
                })
        }
    }

    @action
    async setToken(token) {
        // should save this to AsyncStorage
        try {
            await AsyncStorage.setItem('parentToken', token);
        } catch (error) {
            // Error saving data clear all data
            AsyncStorage.removeItem('parentToken');
        }
        return this.authorization = token
    }

    @computed get getToken() {
        if (this.authorization) {
            return this.authorization
        } else {
            return null
        }
    }

    @action logout() {
        this.authorization = null
    }
}

const parentStore = new ParentStore

export default parentStore
