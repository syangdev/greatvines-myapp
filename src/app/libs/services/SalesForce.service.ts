import { Injectable } from "@angular/core";
import { AuthService } from '../auth/auth.service';

@Injectable()
export class SalesForceService {
    
    private oauth2;
    constructor(private authSvc: AuthService) {
        this.oauth2 = this.authSvc.getOAuth2();
    }

    getContacts() {
        // curl https://yourInstance.salesforce.com/services/data/v20.0/query/?q=SELECT+name+from+Account -H "Authorization: Bearer token"
        return fetch(`${this.oauth2.instance_url}/services/data/v20.0/query/?q=SELECT+name+from+Account`, {
            headers: {
                'Authorization': `Bearer ${this.oauth2.access_token}`,
            }
        }).then((resp) => {
            return resp.json();
        });
    }

    createContact(contact: {Name: string}) {
        // curl https://yourInstance.salesforce.com/services/data/v20.0/sobjects/Account/ -H "Authorization: Bearer token -H "Content-Type: application/json" -d "@newaccount.json"
        return fetch(`${this.oauth2.instance_url}/services/data/v20.0/sobjects/Account/`, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${this.oauth2.access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        }).then(function(resp) {
            return resp.json();
        });
    }

}
