import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  topic,
  message,
}) => (
  <div>
    <h1 className="text text-red-600">Hi, this is {name}</h1>
    <h2>
      I am interested in {topic}
      {message}
    </h2>
    <h3>Please contact me with {email}</h3>
  </div>
);
