import { parse } from 'node-html-parser';
import React from 'react';

const trimRawText = (text) => {
  const trimmedString = text.substring(1, text.length-1).trim();
  return trimmedString.split(';')
}

export function parseTextData(rawTextData, allowedCategories) {
  const textData = {};
  var catagoryKey = '';
  const element = parse(rawTextData);
  element.childNodes.map(childNode => {
    if (childNode.childNodes.length > 0) {
      if (childNode.tagName === 'b') {
        catagoryKey = childNode.childNodes[0].rawText;
        if(!textData[catagoryKey] && allowedCategories.includes(catagoryKey)) {
          textData[catagoryKey] = [];
        }
      } 
    } else {
      if (childNode.nodeType === 3 && allowedCategories.includes(catagoryKey)) {
        textData[catagoryKey].push(...trimRawText(childNode.rawText));
      }
    }
  })
  return textData;
}

export function parseTextDataFromList(sections, sectionNames, allowedCategories) {
  const textData = {};
  var sectionKey = sectionNames[0];
  var catagoryKey = '';
  sections.map(section => {
    const element = parse(section.text_data);
    element.childNodes.map(childNode => {
      if (childNode.childNodes.length > 0) {
        if (childNode.tagName === 'b' &&  sectionNames.includes(childNode.childNodes[0].rawText)) {
          sectionKey = childNode.childNodes[0].rawText;
          if(!textData[sectionKey]) {
            textData[sectionKey] = {};
          }
        } else if (childNode.tagName === 'b') {
          catagoryKey = childNode.childNodes[0].rawText;
          if(!textData[sectionKey][catagoryKey] && allowedCategories.includes(catagoryKey)) {
            textData[sectionKey][catagoryKey] = [];
          }
        } 
      } else {
        if (childNode.nodeType === 3 && allowedCategories.includes(catagoryKey)) {
          textData[sectionKey][catagoryKey].push(...trimRawText(childNode.rawText));
        }
      }
    })
  });
  return textData;
}

export function createDisplayElements(orderedTextDataSections) {
  const elements = [];
  orderedTextDataSections.map(section => {
    if (Object.keys(section).length > 0) {
      Object.keys(section).map(key => {
        elements.push(<span key={key}><b>{key}: </b>{section[key].map((value, index) => {
          if (section[key].length === 1 && index === 0) {
            return <span key={index}>{value} </span>
          } else if ((section[key].length >= 0 && index === 0) || (index >= 0 && index < section[key].length - 1)) {
            return <span key={index}>{value}, </span>
          } else {
            return <span key={index}>{value}</span>
          }
        })} </span>)
      })
    }
  });
  return elements;
}
