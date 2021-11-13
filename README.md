# graphql-server-tutorial

---
## TypeScript

1. npm i -D @types/node typescript nodemon

2. ```npx tsconfig.json``` and select node from the list. You are free to modify it as per your needs.

3. Create a file names ```src/index.ts``` in your project root.

4. Then in your ```package.json```, add the following 2 scripts:
    ```json
    "scripts":  {
        "watch": "tsc -w",
        "dev": "nodemon dist/index.js"
    },
    ```
5. Then use:

    ```npm run watch```

    ```npm run dev```

    And, it will automatically look for changes in .ts files and you can see the compiled file output in the terminal as you go!