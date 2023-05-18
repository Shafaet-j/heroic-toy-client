import React from "react";

const Blog = () => {
  return (
    <section className="container mx-auto my-20">
      <div className=" grid grid-cols-2 gap-6 justify-items-center">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className=" text-3xl">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>
            <p>
              ans: Access Token: An access token is a credential that is used to
              authorize access to protected resources, such as APIs or web
              services. It is typically a string of characters that is generated
              by an authentication server after a successful login. The access
              token contains information about the user's identity and
              permissions and has an expiration time associated with it, after
              which it becomes invalid. <br /> Refresh Token: A refresh token is
              a credential that is used to obtain a new access token when the
              current one expires. It is usually longer-lived than the access
              token and is securely stored on the client-side. The refresh token
              is sent to the authentication server to request a new access token
              without the need for the user to re-enter their credentials. It is
              important to note that the refresh token itself does not grant
              access to protected resources; it is only used to obtain a new
              access token.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className=" text-3xl">Compare SQL and NoSQL databases?</h2>
            <p>
              Ans: SQL is the programming language used to interface with
              relational databases. (Relational databases model data as records
              in rows and tables with logical links between them). NoSQL is a
              class of DBMs that are non-relational and generally do not use SQL
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className=" text-3xl">What is express js? What is Nest JS?</h2>
            <p>
              Ans: Express.js is a popular web application framework for
              Node.js. It provides a simple and minimalist approach to building
              web servers and APIs. Express.js is known for its flexibility and
              ease of use, allowing developers to quickly create server-side
              applications and handle HTTP requests and responses. <br />{" "}
              NestJS, on the other hand, is a framework for building scalable
              and maintainable server-side applications. It is built on top of
              Node.js and leverages TypeScript, a statically-typed superset of
              JavaScript, to bring strong typing and enhanced tooling to the
              development process. NestJS takes inspiration from Angular,
              borrowing concepts like dependency injection, decorators, and
              modules.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2>What is MongoDB aggregate and how does it work?</h2>
            <p>
              Ans: MongoDB's aggregate is a powerful method used for performing
              advanced data processing and analysis operations on collections of
              documents. It allows you to combine multiple operations together
              to form a pipeline that processes data in stages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
