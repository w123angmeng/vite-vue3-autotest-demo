module.exports = {
	globalTeardown: '@dcloudio/uni-automator/dist/teardown.js',
	testEnvironment: '@dcloudio/uni-automator/dist/environment.js',
    testTimeout: 30000,
    reporters: [
        'default'
    ],
    watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
    moduleFileExtensions: ['js', 'json'],
    rootDir: __dirname,
    testMatch: ["<rootDir>/src/pages/**/*test.[jt]s?(x)"],
    testPathIgnorePatterns: ['/node_modules/']
}