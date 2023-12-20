import { DidKeyMethod } from '@web5/dids';
import { SignJWT, jwtVerify, importJWK } from 'jose';

async function generateKeys() {
    const didKey = await DidKeyMethod.create();
    return {
        publicKeyJwk: didKey.keySet.verificationMethodKeys[0].publicKeyJwk,
        privateKeyJwk: didKey.keySet.verificationMethodKeys[0].privateKeyJwk,
        did: didKey.did
    };
}

async function signData(nonce, did, privateKeyJwk) {
    const privateKey = await importJWK(privateKeyJwk, 'EdDSA');
    return await new SignJWT({ nonce })
        .setProtectedHeader({ alg: 'EdDSA', kid: did })
        .sign(privateKey);
}

async function verifySignature(jwt, publicKeyJwk) {
    const publicKey = await importJWK(publicKeyJwk, 'EdDSA');
    return await jwtVerify(jwt, publicKey);
}

async function main() {
    try {
        const { publicKeyJwk, privateKeyJwk, did } = await generateKeys();

        console.log('DID:', did)
        console.log('Public Key:', publicKeyJwk);
        console.log('Private Key:', privateKeyJwk);

        const nonce = '1234567';

        const signedJwt = await signData(nonce, did, privateKeyJwk);
        console.log('Signed JWT:', signedJwt);

        const verificationResult = await verifySignature(signedJwt, publicKeyJwk);
        console.log('Verified Payload:', verificationResult.payload);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

await main();