export const Blogs = () => {
  return (
    <section className="min-h-screen p-8 lg:p-20 bg-base-200">
      <div className="p-8 bg-base-300 rounded-lg my-5 lg:px-20 lg:py-12 ">
        <h2 className="lg:text-2xl font-bold my-5 text-gray-600">
          Q: Difference between Javascript and NodeJS.
        </h2>
        <div className="text-gray-600 text-sm lg:text-base leading-loose">
          Ans: <b>Javascript</b> is a scripting language that runs on the browser to provide
          interactivity. We can make a website dynamic using Javascript.
          <br />
          <br />
          On the other hand, <b>NodeJS</b> is a javascript runtime environment that let's javascript
          to be run on the server-side. It allows javascript to run outside of the browser
        </div>
      </div>
      <div className="p-8 bg-base-300 rounded-lg my-5 lg:px-20 lg:py-12 ">
        <h2 className="lg:text-2xl font-bold my-5 text-gray-600">
          Q: When should you use NodeJS and when should you use MongoDB?
        </h2>
        <div className="text-gray-600 text-sm lg:text-base leading-loose">
          Ans: Well both have different use cases. One provides runtime environment, other is
          database.
          <br />
          <br />
          <b>NodeJS:</b> Since it is a Javascript runtime environment, it helps us run javascript
          out of the browser on the server-side. It's main responsibility is to execute your
          application.
          <br />
          <br />
          <b>MongoDB:</b> It is NoSQL database. We use it to store data. It's responsibility is to
          store data and let us use it when we require it. I.e: Read, modify, delete the data etc.
          <br />
          <br /> Let's understand using an example: Suppose you want to build a website where you
          need to store data in a database, so here you will use MongoDB but in order to
          store/retrieve the data you need a medium, here NodeJS acts as a medium to do that for
          you, provides server side application execution.
        </div>
      </div>
      <div className="p-8 bg-base-300 rounded-lg my-5 lg:px-20 lg:py-12 ">
        <h2 className="lg:text-2xl font-bold my-5 text-gray-600">
          Q: Differences between SQL and NoSQL databases.
        </h2>
        <div className="text-gray-600 text-sm lg:text-base leading-loose">
          <b>SQL</b> stands for Structured Query Language, it is a relational database focusing on
          reducing data duplication whereas <b>NoSQL</b> or Not only SQL is non-relational database
          focusing on scaling, fast queries etc. <br />
          <br />
          In SQL, data stored in tables with fixed rows and columns, on the other hand in NoSQL
          databases document based, key-value pairs. <br />
          <br />
          SQL databases are vertically scalable while NoSQL are horizontally scalable. Example of
          SQL databases are Oracle, MySQL, PostgreSQL etc. <br />
          <br />
          Example of NoSQL databases are MongoDB, CouchDB.
        </div>
      </div>
      <div className="p-8 bg-base-300 rounded-lg my-5 lg:px-20 lg:py-12 ">
        <h2 className="lg:text-2xl font-bold my-5 text-gray-600">
          Q: What is the purpose of jwt and how does it work?
        </h2>
        <div className="text-gray-600 text-sm lg:text-base leading-loose">
          Ans: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and
          self-contained way for securely transmitting information between parties as a JSON object.
          It is used for authorization, information exchange etc. <br />
          <br />
          <b> It consists of 3 parts.</b> <br />
          <p>1. Header</p>
          <p>2. Payload</p>
          <p>3. Signature</p>
          <br />
          The <b>header</b> typically consists of two parts: the type of the token, which is JWT,
          and the signing algorithm being used, such as HMAC SHA256 or RSA. <br />
          <br />
          The <b>payload</b> contains the claims. This is displayed as a JSON string, usually
          containing no more than a dozen fields to keep the JWT compact. This information is
          typically used by the server to verify that the user has permission to perform the action
          they are requesting. <br />
          <br />
          The <b>signature</b> ensures that the token hasn’t been altered. The party that creates
          the JWT signs the header and payload with a secret that is known to both the issuer and
          receiver.
          <p className="font-bold text-2xl my-5">How does it work?</p>
          In authorization use case as an example, when a user logs in, a token is generated using
          above mentioned 3 parts, this token is then send to the client side as a reference, so
          when a user visits a protected route this token will be sent to the server side (generally
          included in authorization headers part as a "Bearer token") for checking the validity.
          After that a check is made with that token and a secret key, if the token is successfully
          decoded then user is grant access to that route, else s/he is denied.
        </div>
      </div>
    </section>
  );
};
