import React, { useState, useEffect } from "react";
import { Card, Accordion, Button, Collapse } from "react-bootstrap";
import { useMustRead } from "../entities";

const MustRead = () => {
  const [mustRead, { toggleMustRead }] = useMustRead();
  useEffect(() => {
    setTimeout(() => {
      toggleMustRead(true);
    }, 1000);
    return () => {
      toggleMustRead(false);
    };
  }, []);
  return (
    <Card className="mb-1">
      <Card.Header onClick={() => toggleMustRead(!mustRead.isMustReadOpen)}>
        <span className="text-danger">Must Read</span>
      </Card.Header>
      <Collapse in={mustRead.isMustReadOpen}>
        <Card.Body>
          <p>
            Please be advised that the accomplishing of your concerns is
            scheduled from{" "}
            <strong>
              <span className="text-success">
                Monday to Friday, 8:00 AM to 5:00 PM
              </span>
            </strong>
            .
          </p>
          <p>
            Accomplishing your request will start upon the time you submitted
            this request onwards.
          </p>
          <p>
            For <strong>checking status of your request</strong>, just visit
            this app and search using your Sr Code on Search Bar.
          </p>
          <p>
            If the{" "}
            <strong>
              ICT Office has a concern with your submitted requirements
            </strong>
            , ICT Office will provide <strong>Remarks</strong> on your pending
            request!
          </p>
          <p>
            <strong>
              <span className="text-danger">Note: </span>
            </strong>
            This App is exclusive only for BatStateU Rosario Students. Any
            campus that accomplishes this App will not be entertain. Thank you.
          </p>
        </Card.Body>
      </Collapse>
    </Card>
  );
};

export default MustRead;
