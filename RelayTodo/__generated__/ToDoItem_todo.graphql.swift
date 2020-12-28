// Auto-generated by relay-compiler. Do not edit.

import Relay

public struct ToDoItem_todo {
    public var fragmentPointer: FragmentPointer

    public init(key: ToDoItem_todo_Key) {
        fragmentPointer = key.fragment_ToDoItem_todo
    }

    public static var node: ReaderFragment {
        ReaderFragment(
            name: "ToDoItem_todo",
            type: "Todo",
            selections: [
                .field(ReaderScalarField(
                    name: "id"
                )),
                .field(ReaderScalarField(
                    name: "text"
                )),
                .field(ReaderScalarField(
                    name: "complete"
                ))
            ]
        )
    }
}

extension ToDoItem_todo {
    public struct Data: Decodable, Identifiable {
        public var id: String
        public var text: String
        public var complete: Bool
    }
}

public protocol ToDoItem_todo_Key {
    var fragment_ToDoItem_todo: FragmentPointer { get }
}

extension ToDoItem_todo: Relay.Fragment {}

#if canImport(RelaySwiftUI)
import RelaySwiftUI

extension ToDoItem_todo_Key {
    public func asFragment() -> RelaySwiftUI.Fragment<ToDoItem_todo> {
        RelaySwiftUI.Fragment<ToDoItem_todo>(self)
    }
}
#endif