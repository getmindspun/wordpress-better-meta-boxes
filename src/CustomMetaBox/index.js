import {render} from '@wordpress/element';
import {ToggleControl} from '@wordpress/components';
import {useSelect, useDispatch} from '@wordpress/data';

const MyToggle = () => {
    const meta = useSelect(function (select) {
        // noinspection JSUnresolvedFunction
        const data = select('core/editor').getEditedPostAttribute('meta');

        const state = data ? data['_better_meta_box_value'] : false;
        console.log(data);
        return state;
    }, []);

    //const [value, setValue] = useState(meta._better_meta_box_value);
    const {editPost} = useDispatch('core/editor');

    return (
        <ToggleControl
            label="Toggle Control"
            help={
                meta
                    ? 'The meta value is TRUE.'
                    : 'The meta value is FALSE.'
            }
            checked={ meta }
            onChange={(e) => {
                editPost({
                    meta: {_better_meta_box_value: e},
                });
            }}
        />
    );
};

const MyMetaBox = () => {
    return (
        <div>
            <p>This is a better Meta Box.</p>
            <MyToggle/>,
        </div>
    );
}

render(
    <MyMetaBox/>,
    document.getElementById('better-meta-box-element')
);
