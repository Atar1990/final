export const getEnv = () => {
    const isLocal = window.location.href.includes('localhost');
    if (isLocal) return 'https://localhost:44303';
    else return 'PROD_SERVER_URL'
}