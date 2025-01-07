import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpInterceptorFn} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

export const domainInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('api_url')) {
    const modifiedUrl = req.url.replace(`api_url`, environment.apiUrl);
    const modifiedReq = req.clone({ url: modifiedUrl });
    return next(modifiedReq);
  }
  return next(req);
};
