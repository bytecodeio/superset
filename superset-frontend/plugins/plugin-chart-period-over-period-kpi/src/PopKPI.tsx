/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { useEffect, createRef } from 'react';
import { PopKPIProps, PopKPIStylesProps } from './types';

const styles = (theme) => ({
  fontFamily: 'inherit',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: `${theme.gridUnit * 4}px`,
  borderRadius: `${theme.gridUnit * 2}px`,
  height: `${theme.height}px`,
  width: `${theme.width}px`,
});

const BigValueContainerStyles = (theme) => ({
  fontSize: `${theme.headerFontSize ? theme.headerFontSize : 60}px`,
  fontWeight: `${theme.typography.weights.normal}`,
  textAlign: 'center',
});

const TableContainer = {
  width: '100%',
  display: 'table',
};

const ComparisonContainer = {
  display: 'table-row',
};

const ComparisonValue = (theme) => ({
  fontWeight: `${theme.typography.weights.light}`,
  width: '33%',
  display: 'table-cell',
  fontSize: `${theme.subheaderFontSize ? theme.subheaderFontSize : 20}px`,
  textAlign: 'center',
});

export default function PopKPI(props: PopKPIProps) {
  const {
    height,
    width,
    bigNumber,
    prevNumber,
    valueDifference,
    percentDifference,
    headerFontSize,
    subheaderFontSize,
  } = props;

  const rootElem = createRef<HTMLDivElement>();

  return (
    <div
      style={{ ...styles }}
      ref={rootElem}
      boldText={props.boldText}
      headerFontSize={props.headerFontSize}
      height={height}
      width={width}
    >
      <div style={{ ...BigValueContainerStyles }} headerFontSize={headerFontSize}>{bigNumber}</div>
      <div style={{ ...TableContainer }}>
        <div style={{ ...ComparisonContainer }}>
          <div style={{ ...ComparisonValue }} subheaderFontSize={subheaderFontSize}> #: {prevNumber}</div>
          <div style={{ ...ComparisonValue }} subheaderFontSize={subheaderFontSize}> Δ: {valueDifference}</div>
          <div style={{ ...ComparisonValue }} subheaderFontSize={subheaderFontSize}> %: {percentDifference}</div>
        </div>
      </div>
    </div>
  );
}
