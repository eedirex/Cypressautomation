const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 6000,
  env: {
    db: {
      host: '127.0.0.1',
      user: 'dcir',
      password: 'dcir123',
      database: 'dcir_db',
      port: '3307',
    },
    url: 'https://dcir-staging.teamapt.com/login',
    validUsername: 'ialiyu@teamapt.com',
    validPassword: 'P@ssword1',
    deactivatedUsername: 'test@test.com',
    invalidUsername: 'dcir_qa1',
    invalidPassword: 'password',
    startDate: '2023-01-01',
    endDate: ' ',
    rrn: '007356',
    maskedPan: '524289******3325',
    dbMaskedPan: '524289******2000',
    terminalId: '703WDQ',
    bulkSettlementKey: '220627090000ecb22206271735000008',
    fsParticipantName: 'Cypress Participant',
    nfsParticipantName: 'Cypress Non fee Participant',
    participantDescription: 'This is an automated Test',
    accountNumber: '9988776655',
    debitaccountNumber: '5566778899',
    phoneNumber: '81012345678',
    alternatePhoneNumber: '07012345678',
    cypressEmail: 'cypressagent@test.com',
    cardAcceptorId: 'AUTOTEST1234567',
    logCode: 'MCK|20220623|3113',
    createdDateFrom: '2022-07-01',
    createdDateTo: ' ',
    responseCode: '00',
    insertionQuery:
      "INSERT INTO dcir_db.backoffice_transaction_records (transaction_amount, terminal_id, masked_pan, rrn, stan, card_acceptor_id,  response_code, transaction_time,  transaction_search_key, aptent_id, request_time, hashed_pan, processing_code, card_acceptor_location, transaction_currency_code) VALUES ( '1000000', '203AUTO', '524289******2000', '002357', '11', '2UBNLA234567897', '00', '2022-07-12 06:14:30', '75613', '0101', '2022-07-12 06:15:30', 'hjdhfhdfbuyeihd', '22264', 'Lagos', 'NGN')",
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
