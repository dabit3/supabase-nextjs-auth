## Magic Link Authentication and Route Controls with Supabase and Next.js

To run this project, To get started with this project, first create a new project in the [Supabase](https://supabase.io/) dashboard

Once you've created the project in the Supabase dashboard, continue with the next steps.

## Run either locally or deploy to Vercel

### Deploying to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fdabit3%2Fsupabase-nextjs-auth&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY&envDescription=API%20URL%20and%20API%20Key)

### Running locally

1. Clone this project

```sh
git clone https://github.com/dabit3/supabase-nextjs-auth
```

2. Change into the directory and install the dependencies

```sh
cd supabase-nextjs-auth

npm install
```

3. Create a file named __.env.local__ and update it with the values from your Supabase project:

```
NEXT_PUBLIC_SUPABASE_URL=https://app-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-public-api-key
```

![App URLs](appurls.jpeg)

4. Run the server

```sh
npm run dev
```
