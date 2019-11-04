let team = {};
team.aws = {};

team.onPageLoad = function(isProdContext)
{
	team.signIn();


	/* Get a file from S3 */
	team.aws.s3 = new AWS.S3();

	let params = {
		'Bucket' : '949177333571-us-west-2-web',
		'Key' : 'team5/static/example.json'
	};

	let getObjectPromise = team.aws.s3.getObject(params).promise();

	getObjectPromise.then(function(data)
	{
		let options = {};
		let fileContents = data.Body.toString();

			obj = JSON.parse(fileContents);
			document.getElementById("demo").innerHTML =obj.name;

		console.log(fileContents);

	}).catch(function(err) {
		console.log('in .catch promise');
		console.log('error: ' + JSON.stringify(err));
	});

	/* How to get data from Athena */
	// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Athena.html


	//console.log("hello")
}


// this provides acceses to AWS resources
// currently, only S3 read access is enabled
// ask Zack if you need additional access
team.signIn = function()
{

	let IDENTITY_POOL_ID = 'us-west-2:282701b9-eb8d-443a-9e64-97f66677e219';
	let REGION = 'us-west-2';

	AWS.config.region = REGION;

	AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		IdentityPoolId: IDENTITY_POOL_ID
	})
};