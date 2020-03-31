import Agenda from 'agenda';

const {
  AGENDA_COLLECTION: collection,
  AGENDA_CONNECTION_URI: address,
} = process.env;

const config: Agenda.AgendaConfiguration = {
  db: {
    address,
    collection,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};

export default config;
