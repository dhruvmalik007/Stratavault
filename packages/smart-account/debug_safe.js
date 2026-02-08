try {
    const pkg = require('@safe-global/protocol-kit');
    console.log('Keys:', Object.keys(pkg));
    console.log('Default:', pkg.default);

    try {
        const Safe = pkg.default || pkg.Safe;
        console.log('Safe keys:', Safe ? Object.keys(Safe) : 'Safe is undefined');
    } catch (e) { }

} catch (e) {
    console.error(e);
}
