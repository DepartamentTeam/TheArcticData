'use client'
import { ReactNode, useEffect } from "react"

interface IServiceWorker {
    children: ReactNode
}

export const ServiceWorker = ({children} : IServiceWorker) => {
    


    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
              .register('/service-worker.js')
              .then((registration) => console.log('scope is: ', registration.scope));
              const installEvent = () => {
                self.addEventListener('install', () => {
                  console.log('service worker installed');
                });
              };
              installEvent();
              
              const activateEvent = () => {
                self.addEventListener('activate', () => {
                  console.log('service worker activated');
                });
              };
              activateEvent();
          }
    }, [])
    return(
        <ServiceWorker>
            {children}
        </ServiceWorker>
    )
}