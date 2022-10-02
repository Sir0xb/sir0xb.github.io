import * as React from 'react';

const TestReactComponent = () => {
	const [test, setTest] = React.useState('test');

	return (
		<div>
			Test React Component
			<div onClick={() => setTest(test + '?')}>{test}</div>
		</div>
	);
};

export class TestReactComponentNew extends React.Component<{}, {}, any> {
	constructor(props: any) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		console.log('Click happened');
	}
	override render() {
		return <button onClick={this.handleClick}>Click Me</button>;
	}
}
export default TestReactComponent;
