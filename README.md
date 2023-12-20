To Build:
```
npm install
node index.js
```

Example Output:
```
DID: did:key:z6Mkuqs19gadtJmkC4E5YevWNCtxwQ1d7uk83gHbwGcaLLVX
Public Key: {
  alg: 'EdDSA',
  crv: 'Ed25519',
  kty: 'OKP',
  ext: 'true',
  key_ops: [ 'verify' ],
  x: '5Kmb1lI4pdnxCRZmRW1u_5wsv7E4Dc_F-M93xUAlB8o'
}
Private Key: {
  d: 'U3MELKuKD_MHQ3BQsgQfDa98QkGpqXUGQCiN_yLZNxU',
  alg: 'EdDSA',
  crv: 'Ed25519',
  kty: 'OKP',
  ext: 'true',
  key_ops: [ 'sign' ],
  x: '5Kmb1lI4pdnxCRZmRW1u_5wsv7E4Dc_F-M93xUAlB8o'
}
Signed JWT: eyJhbGciOiJFZERTQSJ9.eyJkaWQiOiJkaWQ6a2V5Ono2TWt1cXMxOWdhZHRKbWtDNEU1WWV2V05DdHh3UTFkN3VrODNnSGJ3R2NhTExWWCJ9.r1-nkLQnqwWwIG70FoG6EpjJrb_wGskB10lJ8LfmMg1tNpQ-3Z_QyJbjGVGDcDQ8mhAFOpiRrXbXktgfQ4OhAA
Verified Payload: { did: 'did:key:z6Mkuqs19gadtJmkC4E5YevWNCtxwQ1d7uk83gHbwGcaLLVX' }
```
