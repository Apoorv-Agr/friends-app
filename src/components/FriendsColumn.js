import React from 'react';
import { StarTwoTone, DeleteTwoTone } from '@ant-design/icons';
import { Button, Descriptions } from 'antd'
const getTableColumns = (addFavFriendActionProps, removeFavFriendActionProps, openConfirmationModal, sorterClicked = false) => {
    const columns = [
        {
            title: 'Friend Name',
            dataIndex: 'name',
            key: 'name',
            width: '60%',
            render: (text, record) => {
                return (
                    <Descriptions title={text}>
                        <Descriptions.Item label="">is your friend</Descriptions.Item>
                    </Descriptions>
                )
            }
        },
        {
            title: 'Favorite',
            key: 'isFavorite',
            dataIndex: 'isFavorite',
            width: '20%',
            sorter: (a, b) => { return sorterClicked ? a.isFavorite - b.isFavorite : null },
            render: (text, record) => {
                return (
                    <div key={`${record.id}#Fav#${record.name}`}>
                        {(() => {
                            const icon = record.isFavorite ?
                                <Button
                                    shape="square"
                                    icon={<StarTwoTone twoToneColor="green" />}
                                    onClick={() => { removeFavFriendActionProps(record) }}
                                />
                                :
                                <Button
                                    shape="square"
                                    icon={<StarTwoTone twoToneColor="grey" />}
                                    onClick={() => { addFavFriendActionProps(record) }}
                                />;
                            return <>{icon}</>
                        })()
                        }
                    </div>
                )
            }
        },
        {
            title: 'Remove Friend',
            key: 'isDeleted',
            dataIndex: 'isDeleted',
            width: '20%',
            render: (text, record) => (
                <div key={`${record.id}#del#${record.name}`}>
                    <Button
                        shape="square"
                        icon={<DeleteTwoTone />}
                        onClick={() => { openConfirmationModal(record) }}
                    />
                </div>
            ),
        },
    ];
    return columns
}

export { getTableColumns };

// 