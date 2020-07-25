// Auto-generated by relay-compiler. Do not edit.

import Relay

public struct ToDoList_user {
    public var fragmentPointer: FragmentPointer

    public init(key: ToDoList_user_Key) {
        fragmentPointer = key.fragment_ToDoList_user
    }

    public static var node: ReaderFragment {
        ReaderFragment(
            name: "ToDoList_user",
            type: "User",
            selections: [
                .field(ReaderLinkedField(
                    name: "__ToDoList_todos_connection",
                    alias: "todos",
                    concreteType: "TodoConnection",
                    plural: false,
                    selections: [
                        .field(ReaderLinkedField(
                            name: "edges",
                            concreteType: "TodoEdge",
                            plural: true,
                            selections: [
                                .field(ReaderLinkedField(
                                    name: "node",
                                    concreteType: "Todo",
                                    plural: false,
                                    selections: [
                                        .field(ReaderScalarField(
                                            name: "id"
                                        )),
                                        .field(ReaderScalarField(
                                            name: "__typename"
                                        )),
                                        .fragmentSpread(ReaderFragmentSpread(
                                            name: "ToDoItem_todo"
                                        ))
                                    ]
                                )),
                                .field(ReaderScalarField(
                                    name: "cursor"
                                ))
                            ]
                        )),
                        .field(ReaderLinkedField(
                            name: "pageInfo",
                            concreteType: "PageInfo",
                            plural: false,
                            selections: [
                                .field(ReaderScalarField(
                                    name: "endCursor"
                                )),
                                .field(ReaderScalarField(
                                    name: "hasNextPage"
                                ))
                            ]
                        ))
                    ]
                )),
                .field(ReaderScalarField(
                    name: "id"
                ))
            ]
        )
    }
}

extension ToDoList_user {
    public struct Data: Decodable {
        public var todos: TodoConnection_todos?
        public var id: String?

        public struct TodoConnection_todos: Decodable, ConnectionCollection {
            public var edges: [TodoEdge_edges?]?

            public struct TodoEdge_edges: Decodable, ConnectionEdge {
                public var node: Todo_node?

                public struct Todo_node: Decodable, Identifiable, ToDoItem_todo_Key, ConnectionNode {
                    public var id: String
                    public var fragment_ToDoItem_todo: FragmentPointer
                }
            }
        }
    }
}

public protocol ToDoList_user_Key {
    var fragment_ToDoList_user: FragmentPointer { get }
}

extension ToDoList_user: Relay.Fragment {}

extension ToDoList_user: Relay.PaginationFragment {
    public typealias Operation = ToDoListPaginationQuery
    public static var metadata: Metadata {
        RefetchMetadata(
            path: ["node"],
            identifierField: "id",
            operation: Operation.self,
            connection: ConnectionMetadata(
                path: ["todos"],
                forward: ConnectionVariableConfig(count: "count", cursor: "cursor")
            )
        )
    }
}

#if swift(>=5.3) && canImport(RelaySwiftUI)
import RelaySwiftUI

extension ToDoList_user_Key {
    @available(iOS 14.0, macOS 10.16, tvOS 14.0, watchOS 7.0, *)
    public func asFragment() -> RelaySwiftUI.FragmentNext<ToDoList_user> {
        RelaySwiftUI.FragmentNext<ToDoList_user>(self)
    }

    @available(iOS 14.0, macOS 10.16, tvOS 14.0, watchOS 7.0, *)
    public func asFragment() -> RelaySwiftUI.RefetchableFragment<ToDoList_user> {
        RelaySwiftUI.RefetchableFragment<ToDoList_user>(self)
    }

    @available(iOS 14.0, macOS 10.16, tvOS 14.0, watchOS 7.0, *)
    public func asFragment() -> RelaySwiftUI.PaginationFragmentNext<ToDoList_user> {
        RelaySwiftUI.PaginationFragmentNext<ToDoList_user>(self)
    }
}
#endif