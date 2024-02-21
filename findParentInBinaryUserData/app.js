function findParent(tree, targetId, parentId = null) {
    if (!tree) {
        return null;
    }

    if (tree.id === targetId) {
        return parentId;
    }

    const leftResult = findParent(tree.left, targetId, tree.id);
    const rightResult = findParent(tree.right, targetId, tree.id);

    return leftResult || rightResult;
}

// Example usage:
const userTree = {
    id: 1,
    position: "root",
    left: {
        id: 2,
        position: "left",
        left: {
            id: 4,
            position: "left",
            left: null,
            right: null,
        },
        right: {
            id: 5,
            position: "right",
            left: null,
            right: null,
        },
    },
    right: {
        id: 3,
        position: "right",
        left: {
            id: 6,
            position: "left",
            left: null,
            right: null,
        },
        right: {
            id: 7,
            position: "right",
            left: null,
            right: null,
        },
    },
};

const targetId = 3;
const parentId = findParent(userTree, targetId);

console.log(`Parent ID of node ${targetId}: ${parentId}`);
