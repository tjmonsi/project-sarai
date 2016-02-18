import {Mongo} from 'meteor/mongo';

const KnowledgeHub = new Mongo.Collection('knowledge-hub');

KnowledgeHub.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

KnowledgeHub.methods = {};

export default KnowledgeHub;
