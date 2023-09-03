const mainRouter = () => ({
    HOME: '/',
    LOGIN: '/login',
    JOBS: '/jobs',
    CANDIDATES: '/candidates',
    CANDIDATE: '/candidates/candidate/:id',
    USERS: '/users',
    PLAYGROUND: '/playground',
    NOTIFICATIONS: '/notifications',
    NOT_FOUND: '*',
});
export const MAIN_ROUTES = mainRouter();