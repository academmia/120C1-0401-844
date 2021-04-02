import  {  ApolloServer  }  from  "apollo-server-micro";
import  {  typeDefs  }  from  "../../apollo-server/schemas";
import  {  resolvers  }  from  "../../apollo-server/resolvers";

const  apolloServer  =  new  ApolloServer({  typeDefs,  resolvers  });

export const config = {
    api: {
      bodyParser: false,
    },
  }

export  default  apolloServer.createHandler({ path:  "/api/graphql"  });
