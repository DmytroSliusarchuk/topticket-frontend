import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AppRouter from "./components/AppRouter";
import "./styles/default.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient( )



root.render(
    <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <AppRouter/>
            </QueryClientProvider>
    </React.StrictMode>
);
