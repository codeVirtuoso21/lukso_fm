import React, { useCallback, useMemo, useRef, useState } from "react";
import Image from 'next/image';
import styles from './UploadAssets.module.css';
import { PinataUploader } from "@lukso/data-provider-pinata";
import { config } from "dotenv";
config({ path: "./.env" });

const UploadAssets: React.FC = () => {
	const fileInput = useRef<HTMLInputElement>(null);
	const [url, setUrl] = useState("");
	const [hash, setHash] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	console.log("evironment values===>", process.env.TEST_PINATAAPIKEY)
	const provider = new PinataUploader({
		pinataApiKey: process.env.TEST_PINATAAPIKEY,
		pinataSecretApiKey: process.env.TEST_PINATASECRETAPIKEY,
		pinataJWTKey: process.env.TEST_PINATAJWTKEY,
	});

	const uploadAssets = useCallback(async () => {
		console.log("upload function")
		const file = fileInput?.current?.files?.item(0) as File;
		const formData = new FormData();
		formData.append("file", file); // FormData keys are called fields
		// const urlinfo = await provider.upload(file);
		// console.log(urlinfo);
	  }, []);
	return (
		<div
		className={`${styles.profileContainer} relative bg-white rounded-lg shadow-lg p-4 mx-auto`}
		>
			<div>Pinata IPFS upload test interface(...NOT FINISH) </div>
			<div>
				<input ref={fileInput} type="file" accept="image/*" />
				<button 
					className="m-2 bg-lukso-pink text-white font-bold py-2 px-4 rounded" 
					onClick={uploadAssets}
				>
					Upload
				</button>
				<div className="url">{url}</div>
				{/* <div>
					<img className="image" src={imageUrl} alt="uploaded image" />
				</div> */}
			</div>
		</div>
	);
};

export default UploadAssets;
