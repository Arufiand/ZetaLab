const globalEP = {
    http: "https://portal.staging.ortegacapital.com/api"
};

export default class endpoint {
    login() {
        return `${globalEP.http}/public/login`
        // Post > Email and Password
    }

    funds_list(){
        return `${globalEP.http}/self/fund/list`
        // Get > using auth token from login
    }

    funds_detail(fund_id){
        return `${globalEP.http}/self/fund/${fund_id}/detail`
        // Get > using auth token from login
        // pass fund id as parameter to get fund detail
    }
}