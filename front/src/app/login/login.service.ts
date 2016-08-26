import { Injectable } from '@angular/core';

const LOGIN_LOCAL_NAME = "login";

@Injectable()
export class LoginService {

  constructor() { }

  isLogged() :boolean {
  	let login;

  	try {
  		login = localStorage.getItem(LOGIN_LOCAL_NAME);
  	} catch(err) {
  		return false;
  	}
  	if (login && login.length > 0) {
  		return true;
  	}
  	return false;
  }

}
