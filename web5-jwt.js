import { Jwt } from "@web5/credentials";
import { DidKeyMethod } from '@web5/dids';

const didKey = await DidKeyMethod.create();

const signedJwt = await Jwt.sign({
    signerDid : didKey,
    payload   : {
        nonce  : '1234567',
        iss : didKey.did,
        sub : didKey.did,
    }
});

console.log('Signed JWt: ', signedJwt)

const { payload } = await Jwt.verify({ jwt: signedJwt });
console.log('Verified Payload:', payload)