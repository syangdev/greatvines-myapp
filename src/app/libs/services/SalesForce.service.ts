import { Injectable } from "@angular/core";
// import * as https from "https";
// import { promisify } from 'util';
// const request = require('request');
// import * as WebRquest from "web-request";
// import * as https from "https";

@Injectable()
export class SalesForceService {
    // curl https://yourInstance.salesforce.com/services/data/v20.0/query/?q=SELECT+name+from+Account -H "Authorization: Bearer token"
    private oauth2;
    constructor() {
        this.oauth2 = JSON.parse(localStorage.getItem('oauth2'));
    }

    getContacts() {
        // return https.get({
        //     protocol: 'https:',
        //     hostname: this.oauth2.instance_url,
        //     path: '/services/data/v20.0/query/?q=SELECT+name+from+Account',
        //     headers: {
        //         'Authorization': `Bearer ${this.oauth2.access_token}`
        //     }
        // }, (resp) => {
        //     console.log(resp);
        // });
        console.log({oauth2: this.oauth2});
        // return WebRquest.get(
        //     `${this.oauth2.instance_url}/services/data/v20.0/query/?q=SELECT+name+from+Account`,
        //     {
        //         auth: {'bearer': this.oauth2.access_token}
        //     }
        // );
        // return promisify(request({
        //     url: `${this.oauth2.instance_url}/services/data/v20.0/query/?q=SELECT+name+from+Account`,
        //     auth: {
        //         'bearer': this.oauth2.access_token
        //     }
        // }))().then((resp) => {
        //     console.log({resp});
        //     return resp;
        // });
    }

}


// var x = 
// {
//     oauth2: {
//         "access_token": "00D2E000000pvA3!AQoAQATHTFJwZKgy8RGMHRjKG8el7DgkeWhP469XVHp5X37k40HRVowmEsoSur24_iCjrD.PfQITPRoFuwswkSRkPbuEDzIg",
//         "refresh_token": "5Aep861jQoWvwngGhAu4v5vs_d.NQU_6ctxpqB00bdUeFVjdTAl1HuSBPCOFXcOCf9PfAPnsgqDDm_wySRE1ljE",
//         "instance_url": "https://na91.salesforce.com",
//         "id": "https://login.salesforce.com/id/00D2E000000pvA3UAI/0052E00000Iz8dfQAB",
//         "issued_at": "1556521619488",
//         "signature": "BuN5zO6yVqZzQ45cbT2hld+2aFEHVJRfmijWA4Nmdhc=",
//         "scope": "id api web refresh_token",
//         "token_type": "Bearer"
//       },
//     getContacts: function() {
//         return https.get({
//             // protocol: 'https:',
//             // port: 443,
//             host: this.oauth2.instance_url,
//             // auth: `Bearer ${this.oauth2.access_token}`,
//             path: '/services/data/v20.0/query/?q=SELECT+name+from+Account',
//             // method: 'GET',
//             headers: {
//                 Authorization: `Bearer ${this.oauth2.access_token}`
//             }
//         }, (resp) => {
//             console.log(resp);
//         });
//     }
// }

// var request = require('request');

// var accessToken = '00D2E000000pvA3!AQoAQATHTFJwZKgy8RGMHRjKG8el7DgkeWhP469XVHp5X37k40HRVowmEsoSur24_iCjrD.PfQITPRoFuwswkSRkPbuEDzIg';

// request({
//   url: 'https://na91.salesforce.com/services/data/v20.0/query/?q=SELECT+name+from+Account',
//   auth: {
//     'bearer': accessToken
//   }
// }, function(err, res) {
//   console.log(res.body);
// });