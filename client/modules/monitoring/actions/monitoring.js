import {Meteor} from 'meteor/meteor';
import {SimulatedYield} from '/lib/collections';

export default {

  getSimulatedYield(context, pointName) {
    const {Meteor, LocalState} = context;
    const _id = Meteor.uuid();

    // return SimulatedYield.findOne({name: pointName});
    return 'getting here';
  }
};