This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Responsive Page

To make responsive page, first go to CSS code then:

```bash
@media screen and (max-width: 600px) {
    ...
}
```

# Roadmap

- create new project :white_check_mark:
- prototype navbar :white_check_mark:
- prototype landing page :white_check_mark:
- prototype footer :white_check_mark:
- responsive landing page :white_check_mark:
- responsive navbar :white_check_mark:
- resonsive footer :white_check_mark:
- connect to supabase
    * create new file ".env.local"
    * add API url and key from your project
    ```
    NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
    NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
    ```
    * install supabase dependency
    ```
    npm install @supabase/supabase-js
    ```
    * create new file: utils/supabaseClient.js
    * connect to supabase in supabaseClient.js
    ```
    import { createClient } from '@supabase/supabase-js'

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    export const supabase = createClient(supabaseUrl, supabaseAnonKey)
    ```
    * read single data(read from client)
    ```
    import { supabase } from '../utils/supabaseClient'
    ......
    const [username, setUsername] = useState(null)
    const [website, setWebsite] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)

    useEffect(() => {
    getData()
        }, [])

    async function getData() {
    try{
      let { data, error, status } = await supabase
          .from('profiles')
          .select(`username, website, avatar_url`)
          .single()
      if (error && status !== 406) {
          throw error
        }
      if (data) {
          setUsername(data.username)
          setWebsite(data.website)
          setAvatarUrl(data.avatar_url)
        }
      } catch (error){
          alert(error.message)
      }
    }

    return (
    .....
      <p>{username}</p>
      <p>{website}</p>
      <p>{avatar_url}</p>
    .....
    )
    ......
    ```
    * read list of data (read from client)
    ```
    ......
    const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try{
      let { data: datas, error, status } = await supabase
          .from('profiles')
          .select(`username, website, avatar_url`)
          
      if (error && status !== 406) {
          throw error
        }
      if (data) {
          setData(datas)
        }
      } catch (error){
          alert(error.message)
      }
  }
  .....
  return(
      ......
      <div>
            <h1>TODO List</h1>
            <ul>
                {data.map( d =>
                    <li key={d.id}>
                        {d.website} 
                    </li>
                )}
            </ul>
        </div>
      ......
  )
    ```

    * supabase reference https://supabase.com/docs/reference/javascript/select