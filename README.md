# readme

## security

- what is security? the ability to access a resource, leverage encryption (https)
- what is authN and authZ? authentication for the whom, authorization for the what
- what is mfa? strenghten the claim of the whom, leverage biometrics or secondary device (2fa)
- what is jwt? method of transfer for authenticated requests (authN, authZ) based on claims and/or roles
- what is encryption? the art of scrambling data, obfuscate information with private/public key combination (rsa, sha, edcsa), entropy (16, 32, 64, 128, 256, 512, 1024, 2048-bit), symmetric key (http certificates), asymmetric key (ssh)
- what is idaas? okta, security diagram (actor, resource, auth provider, identity manager)
            provider
actor                     resource
            manager
  + industry trusted
  + implements provider, manager as 1 unit
  + allows for additional managers such as Google, GitHub, Microsoft, Facebook, Twitter
  + provides implementation libs/sdks for resources
  + provides compliance for industry laws such as HIPAA, GDPR, ISO (actor data) regarding data protection
- how to implement idaas? 
  + create an account with Okta
  + register an application (urls to the application)
  + add Okta SDK to the resource
  + configure the resource wwith Okta Domain, Okta Client (registered application), Okta Secret (auth to registered application)
  + create actor account
  + add permission for the actor
- why leveraging an idaas platform? decoupling security from resources

## angular

- what is dependency injection? configuration is driven by the environment, compute leverages the given configuration
- how do you implement DI? constructor parameter injection
- what is a service? singleton resource that can be shared across components, transfering data between components, state service (data) or http service (ajax)
- how to you write a service? ngcli, with @Injectable decorator (state service), HttpClientModule with @Injectable (http service)
- what is the NG approach to testing? testing lives side-sby-side with the compute, Karma for running tests, Jasmine for writing assertions (expectations)
- what is a the structure of a unit test? BDD approach, describe (context of the tests), it (context of a behavior), expect (result of that behavior), beforeEach (context setup), *afterEach (context breakdown), runs a copy of the compute not the real compute
- how do you test a component/service with dependencies? leverage a stub to mock the dependencies
- what is e2e testing? testing the complete roundtrip from request to response, from the user interface context
- how do we implement e2e? Protactor (test runner), Jasmine (assertion library), Webdriver (selector engine)
- what is a promise? container referencing a response to be fulfilled at some point in time as a whole
- what is an observable? container referencing a response to be fulfilled at some point in packets for a duration of time until the tail packet (message queue)
- how do you implement promise/observable? promise with then (JS/TS), observable with subscribe (RxJS)
- what is a pipe? function to transform an output format for internationalization (i18n) (date, currency, percent), | (bar key)
- what is an event? event binding, action raised by interface interaction (click, submit, type), (event)="action()"
