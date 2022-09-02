//let calliopeService = 'service.datacalliope.com';
let calliopeService = 'calliope-service.idvxlab.com';
//let calliopeLiteService = 'calliope-service.idvxlab.com:8004';
let calliopeLiteService = 'calliope-service.idvxlab.com:8002';
// let applicationUrl='https://datacalliope.com';
let applicationUrl = 'http://calliope-dev.idvxlab.com';

let urlPrefix = process.env.NODE_ENV === 'production' ? `https://${calliopeService}:8002/api/v1` : 'http://localhost:7001/api/v1';
let uploadDataPrefix = process.env.NODE_ENV === 'production' ? `https://${calliopeLiteService}` : 'http://localhost:6008';//todo  7001
let generationUrlPrefix = process.env.NODE_ENV === 'production' ? `https://${calliopeLiteService}` : 'http://localhost:6010';//todo  7001
let activitiesPrefix = process.env.NODE_ENV === 'production' ? `https://${calliopeService}:8002/log/v1` : 'http://localhost:7001/log/v1';
let publicPrefix = process.env.NODE_ENV === 'production' ? applicationUrl : 'http://localhost:3000';
//let client_id = '033338f2-02a8-44d4-8d54-5173b4a864f9';
let client_id = '6dcd0f8b-6990-4d69-9018-29b3351aa6ff';
let accountIp = `https://account.datacalliope.com`
let logoutRedirectUrlIp = `https://service.datacalliope.com:8001`

const config = {
    url: {
        applicationUrl: applicationUrl,
        //share
        publicPrefix: publicPrefix,
        //login
        loginadmintest: `${urlPrefix}/loginadmintest`,
        loginRedirectUrl: `${accountIp}/#/login?response_type=code&client_id=${client_id}&grant_type=authorization_code&redirect_uri=${applicationUrl}`,
        logoutRedirectUrl: `${applicationUrl}/#/logout`,
        authenUrl: accountIp,
        accessToken: `${urlPrefix}/accesstoken`,
        userImage: `${logoutRedirectUrlIp}/img`,
        checkToken: `${urlPrefix}/checktoken`,
        //logout
        logout: `${urlPrefix}/logout`,
        logoutAuthSystem: `${logoutRedirectUrlIp}/logout`,
        //activities
        users: `${urlPrefix}/users`,
        activitiesApi: `${activitiesPrefix}/users`,
        //upload
        uploadDataPrefix: uploadDataPrefix,
        uploadData: `${uploadDataPrefix}/upload`,
        uploadVideo: `${uploadDataPrefix}/uploadvideo`,
        share: `${uploadDataPrefix}/share`,
        public: `${uploadDataPrefix}/public`,
        fetch: `${uploadDataPrefix}/data/share`,
        //story generation
        factScoring: `${generationUrlPrefix}/fact`,
        generate: `${generationUrlPrefix}/generate`,
    }
}
export default config