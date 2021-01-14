import React, { useEffect, useState, useRef } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import FAQ from "../Faq.json";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { scroller } from "react-scroll";

export default function Faq() {
  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null);
  const [currentFaqId, setCurrentFaqId] = useState(null);
  const [toggleColorFlag, setToggleColorFlag] = useState(false);
  useEffect(() => {
    console.log(process.env);
    alanBtn({
      key: process.env.REACT_APP_ALAN_KEY,
      onCommand: (commandData) => {
        if (commandData.command === "gotoFaq") {
          // Call the client code that will react to the received command
          scroller.scrollTo(`accordion-button-${commandData.faqId}`, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });

          setIndex(commandData.faqId - 1);
          setCurrentFaqId(commandData.faqId);
        }
      },
    });
  }, []);
  console.log("rendered");
  return (
    <div>
      <h4 style={{ fontWeight: "bold", textAlign: "center" }}>
        My Website help
      </h4>
      <Accordion allowToggle allowMultiple={false}>
        {FAQ.map((f) => (
          <AccordionItem
            key={f.id}
            name={`accordion-button-${currentFaqId}`}
            style={{
              border: "1px solid yellow",
              backgroundColor: f.id === currentFaqId ? "#575b63" : "#000",
              color: "#fff",
            }}
          >
            <AccordionButton
              onClick={() => {
                if (f.id === currentFaqId) {
                  console.log("True");
                  setCurrentFaqId(null);
                  setIndex(null);
                } else {
                  setCurrentFaqId(f.id);
                  setIndex(f.id - 1);
                }
              }}
            >
              <Box flex="1" textAlign="left">
                {f.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>{f.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
