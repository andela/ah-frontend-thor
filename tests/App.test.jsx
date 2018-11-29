import "babel-polyfill";
import React from "react";
import { mount } from "enzyme";
import puppeteer from "puppeteer";

import App from "../src/App";

describe("<App />", () => {
	it("should render without crashing", () => {
		expect(mount.bind(null, <App />)).not.toThrow();
	});

	it("print user agent", async () => {
		const browser = await puppeteer.launch({ headless: false });
		const page = await browser.newPage();
		await page.goto("http://google.com");

		await page.screenshot({ path: "filename.png", fullPage: true });
		browser.close();
	}, 16000);
});
