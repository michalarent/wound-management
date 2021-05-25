import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import HumanBody from "../svg/HumanBody.js";

import styles_form from "../../styles/Forms/Forms.module.css";
import styles_main from "../../styles/Home.module.css";

const wound_source_options = [
  { val: "cut", desc: "Cut" },
  { val: "stab", desc: "Stab" },
  { val: "hit", desc: "Hit" },
];

const wound_empirical_description = [
  { val: "just_visible", desc: "It's annoying" },
  { val: "slightly_itchy", desc: "It looks nasty" },
  { val: "very_itchy", desc: "I can't look at it!" },
];

const pain_level_options = [
  { val: "just_visible", desc: "Just Visible..." },
  { val: "slightly_itchy", desc: "Slightly Itchy" },
  { val: "very_itchy", desc: "Very Itchy" },
];

export function RegisterWoundForm() {
  const animatedComponents = makeAnimated();
  return (
    <main className={styles_main.main}>
      <div className={styles_form.card}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Source:</Form.Label>
              <Select
                options={wound_source_options}
                getOptionLabel={(option) => option.desc}
                getOptionValue={(option) => option.val}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Pain Level:</Form.Label>
              <Select
                options={pain_level_options}
                getOptionLabel={(option) => option.desc}
                getOptionValue={(option) => option.val}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>How does it feel?</Form.Label>
              <Select
                options={wound_empirical_description}
                isMulti
                getOptionLabel={(option) => option.desc}
                getOptionValue={(option) => option.val}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group as={Col}>
            
          </Form.Group>
          <Form.Row></Form.Row>
        </Form>
      </div>
    </main>
  );
}

export default RegisterWoundForm;
