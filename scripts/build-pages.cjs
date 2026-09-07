// Run the same Pages build on Windows, macOS, Linux, and GitHub Actions.
process.env.PUBLIC_URL ??= '/OrmondCustomEngraving';
process.env.REACT_APP_ROUTER = 'hash';

require('react-scripts/scripts/build');
