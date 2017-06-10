# typescript_to_flow
Create a Flow Library Definition from a 3rd party library using typescript.

## Typescript library to single d.ts definition file

* https://github.com/SitePen/dts-generator
* `(sudo) npm i -g typescript`
* `(sudo) npm i -g dts-generator`
* Clone the library you want to port
* `dts-generator --name library-name --project /path/to/library --out library-name.d.ts`

## d.ts definition file to Flow Library Definition

* https://github.com/joarwilk/flowgen
* `(sudo) npm i -g flowgen`
* `flowgen library-name.d.ts -o library-name.js`

## Usage of the Flow Library Definition

* https://flow.org/en/docs/libdefs/
* Create a folder `/flow-typed` in your project that uses flow
* Copy library-name.js there and it is ready to use
* https://github.com/flowtype/flow-typed
* If your ported definition really works, consider a pull request to the flow-typed repo.

## Troubleshooting

* https://github.com/joarwilk/flowgen/issues/15