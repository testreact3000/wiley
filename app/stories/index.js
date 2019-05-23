import React from 'react';
import City from 'City'; 
import Cities from 'Cities';
import Form from 'Form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

/*storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
*/
storiesOf('City', module)
    .add('weather', ()=> (<City weather={{weather:[{icon:"09d"}], main:{temp: 40 + 273.15}}}/> ));

storiesOf('Cities', module)
    .add('Not selected', ()=>(<Cities cities={["London","Moscow"]}/>))
    .add('Selected', () => (<Cities cities={["London","Moscow"]} city="London"/>))	
storiesOf('Form', module)
    .add('Initial', () => <Form cities={["London","Moscow","Dhaka","Mata Utu","Apia","Ouagadougou"]}/>)
    .add('With defaults', () => <Form cities={["London","Moscow","Dhaka","Mata Utu","Apia","Ouagadougou"]} defaults={JSON.parse("{\"list\":[{\"comment\":\"\",\"info\":{\"city\":\"Dhaka\",\"weather\":{\"coord\":{\"lon\":90.41,\"lat\":23.71},\"weather\":[{\"id\":721,\"main\":\"Haze\",\"description\":\"haze\",\"icon\":\"50n\"}],\"base\":\"stations\",\"main\":{\"temp\":295.15,\"pressure\":1012,\"humidity\":73,\"temp_min\":295.15,\"temp_max\":295.15},\"visibility\":3200,\"wind\":{\"speed\":3.1,\"deg\":310},\"clouds\":{\"all\":0},\"dt\":1511456400,\"sys\":{\"type\":1,\"id\":7879,\"message\":0.0071,\"country\":\"BD\",\"sunrise\":1511396322,\"sunset\":1511435459},\"id\":1185241,\"name\":\"Dhaka\",\"cod\":200},\"weather_date\":\"2017-11-23T17:37:01.681Z\"}},{\"comment\":\"\",\"info\":{\"city\":\"Sarajevo\",\"weather\":{\"coord\":{\"lon\":18.36,\"lat\":43.85},\"weather\":[{\"id\":800,\"main\":\"Clear\",\"description\":\"clear sky\",\"icon\":\"01n\"}],\"base\":\"stations\",\"main\":{\"temp\":279.15,\"pressure\":1021,\"humidity\":75,\"temp_min\":279.15,\"temp_max\":279.15},\"visibility\":10000,\"wind\":{\"speed\":2.6,\"deg\":100},\"clouds\":{\"all\":0},\"dt\":1511456400,\"sys\":{\"type\":1,\"id\":5967,\"message\":0.014,\"country\":\"BA\",\"sunrise\":1511416333,\"sunset\":1511450029},\"id\":3191281,\"name\":\"Sarajevo\",\"cod\":200},\"weather_date\":\"2017-11-23T17:37:05.978Z\"}},{\"comment\":\"3\",\"info\":{\"city\":\"Bridgetown\",\"weather\":{\"coord\":{\"lon\":-59.62,\"lat\":13.1},\"weather\":[{\"id\":802,\"main\":\"Clouds\",\"description\":\"scattered clouds\",\"icon\":\"03d\"}],\"base\":\"stations\",\"main\":{\"temp\":303.15,\"pressure\":1012,\"humidity\":66,\"temp_min\":303.15,\"temp_max\":303.15},\"visibility\":10000,\"wind\":{\"speed\":6.2,\"deg\":100},\"clouds\":{\"all\":40},\"dt\":1511456400,\"sys\":{\"type\":1,\"id\":4160,\"message\":0.0034,\"country\":\"BB\",\"sunrise\":1511431289,\"sunset\":1511472527},\"id\":3374036,\"name\":\"Bridgetown\",\"cod\":200},\"weather_date\":\"2017-11-23T17:37:10.221Z\"}},{\"comment\":\"4\",\"info\":{\"city\":\"Mata Utu\",\"weather_date\":\"2017-11-23T17:37:15.545Z\"}},{\"comment\":\"5\",\"info\":{\"city\":\"Dhaka\",\"weather\":{\"coord\":{\"lon\":90.41,\"lat\":23.71},\"weather\":[{\"id\":721,\"main\":\"Haze\",\"description\":\"haze\",\"icon\":\"50n\"}],\"base\":\"stations\",\"main\":{\"temp\":295.15,\"pressure\":1012,\"humidity\":73,\"temp_min\":295.15,\"temp_max\":295.15},\"visibility\":3200,\"wind\":{\"speed\":3.1,\"deg\":310},\"clouds\":{\"all\":0},\"dt\":1511456400,\"sys\":{\"type\":1,\"id\":7879,\"message\":0.0071,\"country\":\"BD\",\"sunrise\":1511396322,\"sunset\":1511435459},\"id\":1185241,\"name\":\"Dhaka\",\"cod\":200},\"weather_date\":\"2017-11-23T17:37:32.748Z\"}},{\"comment\":\"\",\"info\":{\"city\":\"Brussels\",\"weather\":{\"coord\":{\"lon\":4.35,\"lat\":50.85},\"weather\":[{\"id\":800,\"main\":\"Clear\",\"description\":\"clear sky\",\"icon\":\"01n\"}],\"base\":\"stations\",\"main\":{\"temp\":283.29,\"pressure\":1008,\"humidity\":76,\"temp_min\":281.15,\"temp_max\":285.15},\"visibility\":10000,\"wind\":{\"speed\":3.6,\"deg\":240},\"clouds\":{\"all\":0},\"dt\":1511457900,\"sys\":{\"type\":1,\"id\":4842,\"message\":0.0028,\"country\":\"BE\",\"sunrise\":1511421151,\"sunset\":1511451932},\"id\":2800866,\"name\":\"Brussels\",\"cod\":200},\"weather_date\":\"2017-11-23T17:38:10.794Z\"}},{\"comment\":\"\",\"info\":{\"city\":\"Sofia\",\"weather\":{\"coord\":{\"lon\":23.32,\"lat\":42.7},\"weather\":[{\"id\":800,\"main\":\"Clear\",\"description\":\"clear sky\",\"icon\":\"01n\"}],\"base\":\"stations\",\"main\":{\"temp\":278.15,\"pressure\":1021,\"humidity\":86,\"temp_min\":278.15,\"temp_max\":278.15},\"visibility\":6000,\"wind\":{\"speed\":1,\"deg\":160},\"clouds\":{\"all\":0},\"dt\":1511458200,\"sys\":{\"type\":1,\"id\":5444,\"message\":0.0035,\"country\":\"BG\",\"sunrise\":1511414941,\"sunset\":1511449040},\"id\":727011,\"name\":\"Sofia\",\"cod\":200},\"weather_date\":\"2017-11-23T17:44:38.688Z\"}},{\"comment\":\"adasa\",\"info\":{\"city\":\"Bridgetown\",\"weather\":{\"coord\":{\"lon\":-59.62,\"lat\":13.1},\"weather\":[{\"id\":802,\"main\":\"Clouds\",\"description\":\"scattered clouds\",\"icon\":\"03d\"}],\"base\":\"stations\",\"main\":{\"temp\":303.15,\"pressure\":1012,\"humidity\":66,\"temp_min\":303.15,\"temp_max\":303.15},\"visibility\":10000,\"wind\":{\"speed\":6.2,\"deg\":100},\"clouds\":{\"all\":40},\"dt\":1511456400,\"sys\":{\"type\":1,\"id\":4160,\"message\":0.0034,\"country\":\"BB\",\"sunrise\":1511431289,\"sunset\":1511472527},\"id\":3374036,\"name\":\"Bridgetown\",\"cod\":200},\"weather_date\":\"2017-11-23T17:44:47.836Z\"}},{\"comment\":\"asdas\",\"info\":{\"city\":\"Sarajevo\",\"weather\":{\"coord\":{\"lon\":18.36,\"lat\":43.85},\"weather\":[{\"id\":800,\"main\":\"Clear\",\"description\":\"clear sky\",\"icon\":\"01n\"}],\"base\":\"stations\",\"main\":{\"temp\":279.15,\"pressure\":1021,\"humidity\":75,\"temp_min\":279.15,\"temp_max\":279.15},\"visibility\":10000,\"wind\":{\"speed\":2.6,\"deg\":100},\"clouds\":{\"all\":0},\"dt\":1511456400,\"sys\":{\"type\":1,\"id\":5967,\"message\":0.014,\"country\":\"BA\",\"sunrise\":1511416333,\"sunset\":1511450029},\"id\":3191281,\"name\":\"Sarajevo\",\"cod\":200},\"weather_date\":\"2017-11-23T17:45:00.660Z\"}},{\"comment\":\"\",\"info\":{\"city\":\"Brussels\",\"weather\":{\"coord\":{\"lon\":4.35,\"lat\":50.85},\"weather\":[{\"id\":800,\"main\":\"Clear\",\"description\":\"clear sky\",\"icon\":\"01n\"}],\"base\":\"stations\",\"main\":{\"temp\":282.73,\"pressure\":1008,\"humidity\":76,\"temp_min\":281.15,\"temp_max\":284.15},\"visibility\":10000,\"wind\":{\"speed\":4.1,\"deg\":230},\"clouds\":{\"all\":0},\"dt\":1511459400,\"sys\":{\"type\":1,\"id\":4842,\"message\":0.0029,\"country\":\"BE\",\"sunrise\":1511421153,\"sunset\":1511451931},\"id\":2800866,\"name\":\"Brussels\",\"cod\":200},\"weather_date\":\"2017-11-23T18:03:23.776Z\"}},{\"comment\":\"\",\"info\":{\"city\":\"Brussels\",\"weather\":{\"coord\":{\"lon\":4.35,\"lat\":50.85},\"weather\":[{\"id\":800,\"main\":\"Clear\",\"description\":\"clear sky\",\"icon\":\"01n\"}],\"base\":\"stations\",\"main\":{\"temp\":282.73,\"pressure\":1008,\"humidity\":76,\"temp_min\":281.15,\"temp_max\":284.15},\"visibility\":10000,\"wind\":{\"speed\":4.1,\"deg\":230},\"clouds\":{\"all\":0},\"dt\":1511459400,\"sys\":{\"type\":1,\"id\":4842,\"message\":0.0029,\"country\":\"BE\",\"sunrise\":1511421153,\"sunset\":1511451931},\"id\":2800866,\"name\":\"Brussels\",\"cod\":200},\"weather_date\":\"2017-11-23T18:03:23.776Z\"}}],\"comment\":\"\",\"info\":{\"city\":\"Brussels\",\"weather\":{\"coord\":{\"lon\":4.35,\"lat\":50.85},\"weather\":[{\"id\":800,\"main\":\"Clear\",\"description\":\"clear sky\",\"icon\":\"01n\"}],\"base\":\"stations\",\"main\":{\"temp\":282.73,\"pressure\":1008,\"humidity\":76,\"temp_min\":281.15,\"temp_max\":284.15},\"visibility\":10000,\"wind\":{\"speed\":4.1,\"deg\":230},\"clouds\":{\"all\":0},\"dt\":1511459400,\"sys\":{\"type\":1,\"id\":4842,\"message\":0.0029,\"country\":\"BE\",\"sunrise\":1511421153,\"sunset\":1511451931},\"id\":2800866,\"name\":\"Brussels\",\"cod\":200},\"weather_date\":\"2017-11-23T18:03:23.776Z\"},\"error\":false}")}/>)
    