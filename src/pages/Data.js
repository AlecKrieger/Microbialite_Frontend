import { useState, useMemo } from 'react';

import Datanav from '../components/Datanav';
import BasicTable from '../components/BasicTable'
import {COLUMNS} from '../components/Columns'

const Data = () => {
    const wayptColumns = COLUMNS['Waypoint']
    const DATA =     [{
        "waypointID": 1,
        "dateCollected": "2022-01-01",
        "waypointName": "test",
        "projectName": "test",
        "latitude": 40,
        "longitude": 20,
        "northing": 30.0,
        "easting": 20.0,
        "utmZone1": 11,
        "utmZone2": 11,
        "datum": "a",
        "projection": "UTM",
        "fieldBook": "s",
        "fieldBookPage": 2,
        "formation": "ThI",
        "siteName": "VARCHAR(20)",
        "elevation": 11,
        "measuredSection": 0,
        "sectionName": "VARCHAR(30)",
        "commments": "VARCHAR(255)"
    },
    {
        "waypointID": 2,
        "dateCollected": "2022-01-01",
        "waypointName": "test",
        "projectName": "test",
        "latitude": 40,
        "longitude": 20,
        "northing": 30.0,
        "easting": 20.0,
        "utmZone1": 11,
        "utmZone2": 11,
        "datum": "a",
        "projection": "UTM",
        "fieldBook": "s",
        "fieldBookPage": 2,
        "formation": "ThI",
        "siteName": "VARCHAR(20)",
        "elevation": 11,
        "measuredSection": 0,
        "sectionName": "VARCHAR(30)",
        "commments": "VARCHAR(255)"
    },
    {
        "waypointID": 3,
        "dateCollected": "2022-01-01",
        "waypointName": "test",
        "projectName": "test",
        "latitude": 40,
        "longitude": 20,
        "northing": 30.0,
        "easting": 20.0,
        "utmZone1": 11,
        "utmZone2": 11,
        "datum": "a",
        "projection": "UTM",
        "fieldBook": "s",
        "fieldBookPage": 2,
        "formation": "ThI",
        "siteName": "VARCHAR(20)",
        "elevation": 11,
        "measuredSection": 0,
        "sectionName": "VARCHAR(30)",
        "commments": "VARCHAR(255)"
    },
    {
        "waypointID": 4,
        "dateCollected": "2022-01-01",
        "waypointName": "test",
        "projectName": "test",
        "latitude": 40,
        "longitude": 20,
        "northing": 30.0,
        "easting": 20.0,
        "utmZone1": 11,
        "utmZone2": 11,
        "datum": "a",
        "projection": "UTM",
        "fieldBook": "s",
        "fieldBookPage": 2,
        "formation": "ThI",
        "siteName": "VARCHAR(20)",
        "elevation": 11,
        "measuredSection": 0,
        "sectionName": "VARCHAR(30)",
        "commments": "VARCHAR(255)"
    },
    {
        "waypointID": 5,
        "dateCollected": "2022-01-01",
        "waypointName": "test",
        "projectName": "test",
        "latitude": 40,
        "longitude": 20,
        "northing": 30.0,
        "easting": 20.0,
        "utmZone1": 11,
        "utmZone2": 11,
        "datum": "a",
        "projection": "UTM",
        "fieldBook": "s",
        "fieldBookPage": 2,
        "formation": "ThI",
        "siteName": "VARCHAR(20)",
        "elevation": 11,
        "measuredSection": 0,
        "sectionName": "VARCHAR(30)",
        "commments": "VARCHAR(255)"
    },
    {
        "waypointID": 6,
        "dateCollected": "2022-01-01",
        "waypointName": "test",
        "projectName": "test",
        "latitude": 40,
        "longitude": 20,
        "northing": 30.0,
        "easting": 20.0,
        "utmZone1": 11,
        "utmZone2": 11,
        "datum": "a",
        "projection": "UTM",
        "fieldBook": "s",
        "fieldBookPage": 2,
        "formation": "ThI",
        "siteName": "VARCHAR(20)",
        "elevation": 11,
        "measuredSection": 0,
        "sectionName": "VARCHAR(30)",
        "commments": "VARCHAR(255)"
    },
    {
        "waypointID": 7,
        "dateCollected": "2022-01-01",
        "waypointName": "test",
        "projectName": "test",
        "latitude": 40,
        "longitude": 20,
        "northing": 30.0,
        "easting": 20.0,
        "utmZone1": 11,
        "utmZone2": 11,
        "datum": "a",
        "projection": "UTM",
        "fieldBook": "s",
        "fieldBookPage": 2,
        "formation": "ThI",
        "siteName": "VARCHAR(20)",
        "elevation": 11,
        "measuredSection": 0,
        "sectionName": "VARCHAR(30)",
        "commments": "VARCHAR(255)"
    }]

    const data = useMemo(() => DATA, [])
    const columns = useMemo(() => wayptColumns, [])


    return ( 
        <div className='data'>
            <Datanav/>
            <BasicTable data={data} columns={columns} />
        </div>
     );
}
 
export default Data;
