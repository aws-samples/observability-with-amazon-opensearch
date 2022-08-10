# Installation
> `npm install --save @types/mime-db`

# Summary
This package contains type definitions for mime-db (https://github.com/jshttp/mime-db).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mime-db.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mime-db/index.d.ts)
````ts
// Type definitions for mime-db 1.43
// Project: https://github.com/jshttp/mime-db
// Definitions by: AJP <https://github.com/AJamesPhillips>
//                 Linus Unnebäck <https://github.com/LinusU>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace database {
    /**
     * @see {@link https://github.com/jshttp/mime-db#data-structure}
     */
    interface MimeEntry {
        /**
         * Where the mime type is defined.
         * If not set, it's probably a custom media type.
         */
        readonly source?: MimeSource | undefined;
        /** Known extensions associated with this mime type. */
        readonly extensions?: ReadonlyArray<string> | undefined;
        /** Whether a file of this type can be gzipped. */
        readonly compressible?: boolean | undefined;
        /** The default charset associated with this type, if any. */
        readonly charset?: string | undefined;
    }

    /**
     * @see {@link https://github.com/jshttp/mime-db#data-structure}
     */
    interface MimeDatabase {
        readonly [type: string]: MimeEntry;
    }

    /**
     * Sources:
     * http://www.iana.org/assignments/media-types/media-types.xhtml
     * http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types
     * http://hg.nginx.org/nginx/raw-file/default/conf/mime.types
     */
    type MimeSource = 'iana' | 'apache' | 'nginx';
}

declare const database: database.MimeDatabase;

export = database;

````

### Additional Details
 * Last updated: Tue, 06 Jul 2021 22:03:04 GMT
 * Dependencies: none
 * Global values: none

# Credits
These definitions were written by [AJP](https://github.com/AJamesPhillips), [Linus Unnebäck](https://github.com/LinusU), and [Piotr Błażejewicz](https://github.com/peterblazejewicz).
