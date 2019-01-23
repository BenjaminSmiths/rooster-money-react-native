import {observable} from 'mobx';
import FamilyType from './FamilyType'
import ChildrenStore from '../stores/ChildrenStore'

export default class GoalsModel {
    @observable childUsername: string
    @observable goalProgress: number
    @observable goalTotal: number
    @observable goalStatus: string
    @observable goalCreated: string
    @observable goalImages: string
    @observable goalDescription: string

    store: ChildrenStore

    constructor(store, {childUsername, goalProgress, goalTotal, goalStatus, goalCreated, goalImages, goalDescription}) {
        this.store = store
        this.childUsername = childUsername;
        this.goalProgress = goalProgress;
        this.goalTotal = goalTotal;
        this.goalStatus = goalStatus;
        this.goalCreated = goalCreated;
        this.goalImages = goalImages;
        this.goalDescription = goalDescription;
    }

    destroy() {
        this.store.goals.remove(this);
    }

    toJS() {
        return {
            childUsername: this.childUsername,
            goalProgress: this.goalProgress,
            goalTotal: this.goalTotal,
            goalStatus: this.goalStatus,
            goalCreated: this.goalCreated,
            goalImages: this.goalImages,
            goalDescription: this.goalDescription
        }
    }

    static fromJS(store, object) {
        return new GoalsModel(store, object);
    }
}
